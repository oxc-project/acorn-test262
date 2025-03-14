1.ts
```json
Unterminated Unicode escape sequence.
```
2.ts
```json
Unterminated Unicode escape sequence.
```
3.ts
```json
Unterminated Unicode escape sequence.
```
4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 15,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 14,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 14,
        "raw": "/\\u{10_ffff}/u",
        "regex": {
          "flags": "u",
          "pattern": "\\u{10_ffff}"
        },
        "value": null
      }
    }
  ],
  "sourceType": "module"
}
```
5.ts
```json
Hexadecimal digit expected.
```
6.ts
```json
Hexadecimal digit expected.
```
7.ts
```json
Hexadecimal digit expected.
```
8.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 11,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 10,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 10,
        "raw": "/\\uff_ff/u",
        "regex": {
          "flags": "u",
          "pattern": "\\uff_ff"
        },
        "value": null
      }
    }
  ],
  "sourceType": "module"
}
```
9.ts
```json
Hexadecimal digit expected.
```
10.ts
```json
Hexadecimal digit expected.
```
11.ts
```json
Hexadecimal digit expected.
```
12.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 9,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 8,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 8,
        "raw": "/\\xf_f/u",
        "regex": {
          "flags": "u",
          "pattern": "\\xf_f"
        },
        "value": null
      }
    }
  ],
  "sourceType": "module"
}
```
13.ts
```json
Hexadecimal digit expected.
```
14.ts
```json
Hexadecimal digit expected.
```
15.ts
```json
Hexadecimal digit expected.
```
16.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 15,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 14,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 14,
        "raw": "/\\u{_10ffff}/u",
        "regex": {
          "flags": "u",
          "pattern": "\\u{_10ffff}"
        },
        "value": null
      }
    }
  ],
  "sourceType": "module"
}
```
17.ts
```json
Hexadecimal digit expected.
```
18.ts
```json
Hexadecimal digit expected.
```
19.ts
```json
Hexadecimal digit expected.
```
20.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 11,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 10,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 10,
        "raw": "/\\u_ffff/u",
        "regex": {
          "flags": "u",
          "pattern": "\\u_ffff"
        },
        "value": null
      }
    }
  ],
  "sourceType": "module"
}
```
21.ts
```json
Hexadecimal digit expected.
```
22.ts
```json
Hexadecimal digit expected.
```
23.ts
```json
Hexadecimal digit expected.
```
24.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 9,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 8,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 8,
        "raw": "/\\x_ff/u",
        "regex": {
          "flags": "u",
          "pattern": "\\x_ff"
        },
        "value": null
      }
    }
  ],
  "sourceType": "module"
}
```
25.ts
```json
Unterminated Unicode escape sequence.
```
26.ts
```json
Unterminated Unicode escape sequence.
```
27.ts
```json
Unterminated Unicode escape sequence.
```
28.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 15,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 14,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 14,
        "raw": "/\\u{10ffff_}/u",
        "regex": {
          "flags": "u",
          "pattern": "\\u{10ffff_}"
        },
        "value": null
      }
    }
  ],
  "sourceType": "module"
}
```
29.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 10,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 9,
      "directive": "\\uffff_",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 9,
        "raw": "\"\\uffff_\"",
        "value": "￿_"
      }
    }
  ],
  "sourceType": "module"
}
```
30.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 10,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 9,
      "directive": "\\uffff_",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 9,
        "raw": "'\\uffff_'",
        "value": "￿_"
      }
    }
  ],
  "sourceType": "module"
}
```
31.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 10,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 9,
      "expression": {
        "type": "TemplateLiteral",
        "start": 0,
        "end": 9,
        "expressions": [],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 0,
            "end": 9,
            "tail": true,
            "value": {
              "cooked": "￿_",
              "raw": "\\uffff_"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}
```
32.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 11,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 10,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 10,
        "raw": "/\\uffff_/u",
        "regex": {
          "flags": "u",
          "pattern": "\\uffff_"
        },
        "value": {}
      }
    }
  ],
  "sourceType": "module"
}
```
33.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 8,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 7,
      "directive": "\\xff_",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 7,
        "raw": "\"\\xff_\"",
        "value": "ÿ_"
      }
    }
  ],
  "sourceType": "module"
}
```
34.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 8,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 7,
      "directive": "\\xff_",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 7,
        "raw": "'\\xff_'",
        "value": "ÿ_"
      }
    }
  ],
  "sourceType": "module"
}
```
35.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 8,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 7,
      "expression": {
        "type": "TemplateLiteral",
        "start": 0,
        "end": 7,
        "expressions": [],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 0,
            "end": 7,
            "tail": true,
            "value": {
              "cooked": "ÿ_",
              "raw": "\\xff_"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}
```
36.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 9,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 8,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 8,
        "raw": "/\\xff_/u",
        "regex": {
          "flags": "u",
          "pattern": "\\xff_"
        },
        "value": {}
      }
    }
  ],
  "sourceType": "module"
}
```
37.ts
```json
Unterminated Unicode escape sequence.
```
38.ts
```json
Unterminated Unicode escape sequence.
```
39.ts
```json
Unterminated Unicode escape sequence.
```
40.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 16,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 15,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 15,
        "raw": "/\\u{10__ffff}/u",
        "regex": {
          "flags": "u",
          "pattern": "\\u{10__ffff}"
        },
        "value": null
      }
    }
  ],
  "sourceType": "module"
}
```
41.ts
```json
Hexadecimal digit expected.
```
42.ts
```json
Hexadecimal digit expected.
```
43.ts
```json
Hexadecimal digit expected.
```
44.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 12,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 11,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 11,
        "raw": "/\\uff__ff/u",
        "regex": {
          "flags": "u",
          "pattern": "\\uff__ff"
        },
        "value": null
      }
    }
  ],
  "sourceType": "module"
}
```
45.ts
```json
Hexadecimal digit expected.
```
46.ts
```json
Hexadecimal digit expected.
```
47.ts
```json
Hexadecimal digit expected.
```
48.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 10,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 9,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 9,
        "raw": "/\\xf__f/u",
        "regex": {
          "flags": "u",
          "pattern": "\\xf__f"
        },
        "value": null
      }
    }
  ],
  "sourceType": "module"
}
```
