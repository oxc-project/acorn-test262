__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
        "value": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
        "value": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:FAIL:
```json
Unterminated Unicode escape sequence.
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:FAIL:
```json
Hexadecimal digit expected.
```
__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
