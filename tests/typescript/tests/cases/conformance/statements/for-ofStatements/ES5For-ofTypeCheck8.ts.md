__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 11,
                    "end": 17
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 20,
                      "end": 26
                    },
                    "start": 20,
                    "end": 28
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 30,
                      "end": 36
                    },
                    "start": 30,
                    "end": 38
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSSymbolKeyword",
                      "start": 40,
                      "end": 46
                    },
                    "start": 40,
                    "end": 48
                  }
                ],
                "start": 11,
                "end": 48
              },
              "start": 9,
              "end": 48
            },
            "start": 4,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 48
        }
      ],
      "declare": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 57,
                "end": 63
              },
              "start": 55,
              "end": 63
            },
            "start": 54,
            "end": 63
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 63
        }
      ],
      "declare": false,
      "start": 50,
      "end": 64
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 71
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "union",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 80
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 82,
        "end": 85
      },
      "start": 65,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 72,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 75,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  }
]
```
