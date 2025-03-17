__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2521,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 2520,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 2519,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 23,
            "decorators": [],
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 23,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 15,
                "end": 23,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 15,
                  "end": 21,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 21,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 26,
            "end": 2519,
            "elements": [
              {
                "type": "Literal",
                "start": 39,
                "end": 60,
                "raw": "/foo/visualstudiocode",
                "regex": {
                  "flags": "acddeiiloosstuuv",
                  "pattern": "foo"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 85,
                "end": 101,
                "raw": "/(?med-ium:bar)/",
                "regex": {
                  "flags": "",
                  "pattern": "(?med-ium:bar)"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 125,
                "end": 129,
                "raw": "/\\0/",
                "regex": {
                  "flags": "",
                  "pattern": "\\0"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 132,
                "end": 136,
                "raw": "/\\1/",
                "regex": {
                  "flags": "",
                  "pattern": "\\1"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 139,
                "end": 143,
                "raw": "/\\2/",
                "regex": {
                  "flags": "",
                  "pattern": "\\2"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 146,
                "end": 154,
                "raw": "/(hi)\\1/",
                "regex": {
                  "flags": "",
                  "pattern": "(hi)\\1"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 157,
                "end": 174,
                "raw": "/(hi) (hello) \\2/",
                "regex": {
                  "flags": "",
                  "pattern": "(hi) (hello) \\2"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 177,
                "end": 234,
                "raw": "/\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009/",
                "regex": {
                  "flags": "",
                  "pattern": "\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 237,
                "end": 295,
                "raw": "/\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 298,
                "end": 360,
                "raw": "/(?<foo>)((?<bar>bar)bar)(?<baz>baz)|(foo(?<foo>foo))(?<baz>)/",
                "regex": {
                  "flags": "",
                  "pattern": "(?<foo>)((?<bar>bar)bar)(?<baz>baz)|(foo(?<foo>foo))(?<baz>)"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 363,
                "end": 431,
                "raw": "/(\\k<bar>)\\k<absent>(?<foo>foo)|(?<bar>)((?<foo>)|(bar(?<bar>bar)))/",
                "regex": {
                  "flags": "",
                  "pattern": "(\\k<bar>)\\k<absent>(?<foo>foo)|(?<bar>)((?<foo>)|(bar(?<bar>bar)))"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 450,
                "end": 520,
                "raw": "/{}{1,2}_{3}.{4,}?(foo){008}${32,16}\\b{064,128}.+&*?\\???\\n{,256}{\\\\{,/",
                "regex": {
                  "flags": "",
                  "pattern": "{}{1,2}_{3}.{4,}?(foo){008}${32,16}\\b{064,128}.+&*?\\???\\n{,256}{\\\\{,"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 545,
                "end": 583,
                "raw": "/[-A-Za-z-z-aZ-A\\d_-\\d-.-.\\r-\\n\\w-\\W]/",
                "regex": {
                  "flags": "",
                  "pattern": "[-A-Za-z-z-aZ-A\\d_-\\d-.-.\\r-\\n\\w-\\W]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 586,
                "end": 656,
                "raw": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/",
                "regex": {
                  "flags": "",
                  "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 659,
                "end": 730,
                "raw": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 733,
                "end": 804,
                "raw": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 807,
                "end": 872,
                "raw": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/",
                "regex": {
                  "flags": "",
                  "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 875,
                "end": 941,
                "raw": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 944,
                "end": 1010,
                "raw": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/v",
                "regex": {
                  "flags": "v",
                  "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1013,
                "end": 1070,
                "raw": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/",
                "regex": {
                  "flags": "",
                  "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1073,
                "end": 1131,
                "raw": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1134,
                "end": 1192,
                "raw": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1217,
                "end": 1241,
                "raw": "/\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C/",
                "regex": {
                  "flags": "",
                  "pattern": "\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1244,
                "end": 1269,
                "raw": "/\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1272,
                "end": 1317,
                "raw": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/",
                "regex": {
                  "flags": "",
                  "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1320,
                "end": 1366,
                "raw": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1369,
                "end": 1415,
                "raw": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/v",
                "regex": {
                  "flags": "v",
                  "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1444,
                "end": 1529,
                "raw": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/",
                "regex": {
                  "flags": "",
                  "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1532,
                "end": 1618,
                "raw": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1621,
                "end": 1707,
                "raw": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1710,
                "end": 1786,
                "raw": "/[[^\\P{Decimal_Number}&&[0-9]]&&\\p{L}&&\\p{ID_Continue}--\\p{ASCII}\\p{CWCF}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[[^\\P{Decimal_Number}&&[0-9]]&&\\p{L}&&\\p{ID_Continue}--\\p{ASCII}\\p{CWCF}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1789,
                "end": 1871,
                "raw": "/[^\\p{Emoji}\\p{RGI_Emoji}][^\\p{Emoji}--\\p{RGI_Emoji}][^\\p{Emoji}&&\\p{RGI_Emoji}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^\\p{Emoji}\\p{RGI_Emoji}][^\\p{Emoji}--\\p{RGI_Emoji}][^\\p{Emoji}&&\\p{RGI_Emoji}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1874,
                "end": 1956,
                "raw": "/[^\\p{RGI_Emoji}\\p{Emoji}][^\\p{RGI_Emoji}--\\p{Emoji}][^\\p{RGI_Emoji}&&\\p{Emoji}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^\\p{RGI_Emoji}\\p{Emoji}][^\\p{RGI_Emoji}--\\p{Emoji}][^\\p{RGI_Emoji}&&\\p{Emoji}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 1959,
                "end": 2035,
                "raw": "/[^\\p{RGI_Emoji}\\q{foo}][^\\p{RGI_Emoji}--\\q{foo}][^\\p{RGI_Emoji}&&\\q{foo}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^\\p{RGI_Emoji}\\q{foo}][^\\p{RGI_Emoji}--\\q{foo}][^\\p{RGI_Emoji}&&\\q{foo}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 2038,
                "end": 2132,
                "raw": "/[^\\p{Emoji}[[\\p{RGI_Emoji}]]][^\\p{Emoji}--[[\\p{RGI_Emoji}]]][^\\p{Emoji}&&[[\\p{RGI_Emoji}]]]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^\\p{Emoji}[[\\p{RGI_Emoji}]]][^\\p{Emoji}--[[\\p{RGI_Emoji}]]][^\\p{Emoji}&&[[\\p{RGI_Emoji}]]]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 2135,
                "end": 2229,
                "raw": "/[^[[\\p{RGI_Emoji}]]\\p{Emoji}][^[[\\p{RGI_Emoji}]]--\\p{Emoji}][^[[\\p{RGI_Emoji}]]&&\\p{Emoji}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^[[\\p{RGI_Emoji}]]\\p{Emoji}][^[[\\p{RGI_Emoji}]]--\\p{Emoji}][^[[\\p{RGI_Emoji}]]&&\\p{Emoji}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 2232,
                "end": 2320,
                "raw": "/[^[[\\p{RGI_Emoji}]]\\q{foo}][^[[\\p{RGI_Emoji}]]--\\q{foo}][^[[\\p{RGI_Emoji}]]&&\\q{foo}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^[[\\p{RGI_Emoji}]]\\q{foo}][^[[\\p{RGI_Emoji}]]--\\q{foo}][^[[\\p{RGI_Emoji}]]&&\\q{foo}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 2323,
                "end": 2413,
                "raw": "/[^\\q{foo|bar|baz}--\\q{foo}--\\q{bar}--\\q{baz}][^\\p{L}--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^\\q{foo|bar|baz}--\\q{foo}--\\q{bar}--\\q{baz}][^\\p{L}--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 2416,
                "end": 2516,
                "raw": "/[^[[\\q{foo|bar|baz}]]--\\q{foo}--\\q{bar}--\\q{baz}][^[^[^\\p{L}]]--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[^[[\\q{foo|bar|baz}]]--\\q{foo}--\\q{bar}--\\q{baz}][^[^[^\\p{L}]]--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]"
                },
                "value": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
