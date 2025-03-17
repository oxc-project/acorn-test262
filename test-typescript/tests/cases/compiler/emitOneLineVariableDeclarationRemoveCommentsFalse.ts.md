__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 276,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 43,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 43,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 40,
                "end": 43
              }
            },
            "decorators": [],
            "optional": false
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 95,
            "name": "c",
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
                      "name": "hoge",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 125,
                  "name": "hoge",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 127,
                  "end": 131,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 145,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 145,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 142,
                "end": 145
              }
            },
            "decorators": [],
            "optional": false
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 204,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 204,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 201,
                "end": 204
              }
            },
            "decorators": [],
            "optional": false
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 240,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 236,
            "end": 240,
            "callee": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 246,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 246,
            "end": 252,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 247,
              "end": 252,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 249,
                "end": 252
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 270,
            "end": 274,
            "callee": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 272,
                "end": 273,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
