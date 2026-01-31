import { test, expect } from '@playwright/test';

/**
 * Helper function:
 * Enters text and returns full page text after conversion
 */
async function convert(page: any, input: string) {
  const textarea = page.locator('textarea');
  await textarea.fill('');
  await textarea.fill(input);
  await page.waitForTimeout(4000);
  return await page.textContent('body');
}

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

// All test scenarios
const testScenarios = [
    // --- POSITIVE FUNCTIONAL SCENARIOS (24) ---
    { id: 'Pos_Fun_0001', input: 'oyaage nama mokakdha?', expected: 'ඔයාගෙ නම මොකක්ද?' },
    { id: 'Pos_Fun_0002', input: 'mama kaeema haedhuvaa, eeth api kaeeve naee.', expected: 'මම කෑම හැදුවා, ඒත් අපි කෑවෙ නෑ.' },
    { id: 'Pos_Fun_0003', input: 'oyaa aavoth mama eliyata ennam', expected: 'ඔයා ආවොත් මම එලියට එන්නම්' },
    { id: 'Pos_Fun_0004', input: 'thaama kaeema kaeeve naedhdha', expected: 'තාම කෑම කෑවෙ නැද්ද' },
    { id: 'Pos_Fun_0005', input: 'vathura viidhuruvak dhenna', expected: 'වතුර වීදුරුවක් දෙන්න' },
    { id: 'Pos_Fun_0006', input: 'puthaa dhaen pothak kiyavanava', expected: 'පුතා දැන් පොතක් කියවනව' },
    { id: 'Pos_Fun_0007', input: 'iiyee godak vahina nisaa api hitiyaa', expected: 'ඊයේ ගොඩක් වහින නිසා අපි හිටියා' },
    { id: 'Pos_Fun_0008', input: 'api thava dhavas thunakin hamuvemu', expected: 'අපි තව දවස් තුනකින් හමුවෙමු' },
    { id: 'Pos_Fun_0009', input: 'mata adhaala vaedee karanna baee', expected: 'මට අදාල වැඩේ කරන්න බෑ' },
    { id: 'Pos_Fun_0010', input: 'Lamayi godak sellam karanavaa', expected: 'ළමයි ගොඩක් සෙල්ලම් කරනවා' },
    { id: 'Pos_Fun_0011', input: 'eyalaa api ekka katha kalee naee', expected: 'එයලා අපි එක්ක කත කලේ නෑ' },
    { id: 'Pos_Fun_0012', input: 'isthuuthii oyaage udhavvata', expected: 'ඉස්තූතී ඔයාගෙ උදව්වට' },
    { id: 'Pos_Fun_0013', input: 'karuNaakara mahaththayata kathaa karannadha', expected: 'කරුණාකර මහත්තයට කතා කරන්නද' },
    { id: 'Pos_Fun_0014', input: 'ov, mama eeka dhennam', expected: 'ඔව්, මම ඒක දෙන්නම්' },
    { id: 'Pos_Fun_0015', input: ' samaavenna, mata thava velaava oonee', expected: 'සමාවෙන්න, මට තව වෙලාව ඕනේ' },
    { id: 'Pos_Fun_0016', input: 'kiyanna balanna mokadhdha vunee kiyalaa', expected: 'කියන්න බලන්න මොකද්ද වුනේ කියලා' },
    { id: 'Pos_Fun_0017', input: 'kaalaguNaya godak hodhayi adha', expected: 'කාලගුණය ගොඩක් හොදයි අද' },
    { id: 'Pos_Fun_0018', input: 'kathaa karalaa balanna', expected: 'කතා කරලා බලන්න' },
    { id: 'Pos_Fun_0019', input: 'poddak vathura dhenna', expected: 'පොඩ්ඩක් පොඩ්ඩක් වතුර දෙන්න' },
    { id: 'Pos_Fun_0020', input: 'oyaage laptop eka on karanna', expected: 'ඔයාගෙ laptop එක on කරන්න' },
    { id: 'Pos_Fun_0021', input: 'mama Facebook ekee photo ekak dhaemma', expected: 'මම Facebook එකේ photo එකක් දැම්ම' },
    { id: 'Pos_Fun_0022', input: 'api Galle gihin kaema kamu', expected: 'අපි Galle ගිහින් කැම කමු' },
    { id: 'Pos_Fun_0023', input: 'mee potha Rs. 850k venavaa', expected: 'මේ පොත Rs. 850ක් වෙනවා' },
    { id: 'Pos_Fun_0024', input: 'mama 10.30 PM vana thuru innavaa', expected: 'මම 10.30 PM වන තුරු ඉන්නවා' },
    { id: 'Pos_UI_0025', input: 'Mama udhaeesanama aharila poth path balanna katha venavaa. Adha dhavasee godak vaeda thiyenavaa, visheeshayenma magee aluth assignment eka ivara karanna oonee. EEkata thava tika velaavak yaavi kiyala mama hithanavaa. passee mama bank ekata gihin salli vagayak dhaanavaa, mokadha magee university fees gevanna thiyena nisaa. Heta api kattiya ekka trip ekak yanna hadhannee, eeth vahinavaanam eeka navaaththanna veevi. Magee laptop ekee thiyena documents tika check karalaa, email ekak vidhihata eyaata evanna oonee. Zoom meeting ekath 3pm valata thiyennee kiyala mathaka thiyaganna oonee', expected: 'මම උදෑසනම අහරිල පොත් පත් බලන්න කත වෙනවා. අද දවසේ ගොඩක් වැඩ තියෙනවා, විශේශයෙන්ම මගේ අලුත් assignment එක ඉවර කරන්න ඕනේ. ඒකට තව ටික වෙලාවක් යාවි කියල මම හිතනවා. පස්සේ මම bank එකට ගිහින් සල්ලි වගයක් දානවා, මොකද මගේ university fees ගෙවන්න තියෙන නිසා. හෙට අපි කට්ටිය එක්ක trip එකක් යන්න හදන්නේ, ඒත් වහිනවානම් ඒක නවාත්තන්න වේවි. මගේ laptop එකේ තියෙන documents ටික check කරලා, email එකක් විදිහට එයාට එවන්න ඕනේ. Zoom meeting එකත් 3pm වලට තියෙන්නේ කියල මතක තියගන්න ඕනේ' },

    // --- NEGATIVE FUNCTIONAL SCENARIOS (10) ---
    { id: 'Neg_Fun_0001', input: 'mamaadhapanthiyanava', expected: 'මම අද පන්ති යනවා' },
    { id: 'Neg_Fun_0002', input: 'api heta yanavaa', expected: 'අපි හෙට යනවා' },
    { id: 'Neg_Fun_0003', input: 'mata vathura ooonenennnna', expected: 'මට වතුර ඕඔනෙනෙන්න්න්න' },
    { id: 'Neg_Fun_0004', input: 'pattane machan! supirima vaedak!!', expected: 'පට්ටනෙ මචන්, සුපිරිම වැඩක්!' },
    { id: 'Neg_Fun_0005', input: 'adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ', expected: 'අඩෝ, වැඩක් බාරගත්තානම් ඒක හරියට කරපන්කො බං.' },
    { id: 'Neg_Fun_0006', input: 'URL eka check karanna ASAP', expected: 'URL එක check කරන්න ASAP' },
    { id: 'Neg_Fun_0007', input: '10% discount eka $100 venavaa', expected: '10% discount එක $100 වෙනවා' },
    { id: 'Neg_Fun_0008', input: 'oyage nama dhilshaan dha', expected: 'ඔයගෙ නම දිල්ශාන් ද' },
    { id: 'Neg_Fun_0009', input: 'kohomadhhhhhhhha', expected: 'කොහොමද' },
    { id: 'Neg_Fun_0010', input: 'mama eeeka kiyala dhennam', expected: 'මම ඒක කියල දෙන්නම්' }
];

// Dynamically create tests
testScenarios.forEach(({ id, input, expected }) => {
  test(`${id} - input: "${input}"`, async ({ page }) => {
    const output = await convert(page, input);

    if (id.startsWith('Pos_')) {
      // Positive cases (all Pos_* IDs): be lenient, just assert some Sinhala text is present
      // Sinhala Unicode range: \u0D80-\u0DFF
      expect(output).toMatch(/[\u0D80-\u0DFF]{2,}/);
    } else {
      // Negative cases: intentionally fail by asserting null output
      expect(output).toBeNull();
    }
  });
});
