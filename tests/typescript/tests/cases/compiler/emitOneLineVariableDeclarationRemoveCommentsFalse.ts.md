__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 275,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 29,
            "end": 31,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 70,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 43,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 43,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 40,
                "end": 43
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 67,
            "end": 69,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 134,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 95,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 78,
                "end": 95,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 80,
                    "end": 93,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 84,
                      "decorators": [],
                      "name": "hoge",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 84,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 86,
                        "end": 93
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 119,
            "end": 133,
            "properties": [
              {
                "type": "Property",
                "start": 121,
                "end": 131,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 125,
                  "decorators": [],
                  "name": "hoge",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 127,
                  "end": 131,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 173,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 145,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 145,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 142,
                "end": 145
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 170,
            "end": 172,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 212,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 204,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 204,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 201,
                "end": 204
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 209,
            "end": 211,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 241,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 240,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 236,
            "end": 240,
            "callee": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 275,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 246,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 246,
            "end": 252,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 247,
              "end": 252,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 249,
                "end": 252
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 270,
            "end": 274,
            "callee": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 272,
                "end": 273,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
