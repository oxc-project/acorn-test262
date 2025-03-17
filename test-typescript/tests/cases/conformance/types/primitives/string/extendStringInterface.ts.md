__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "String",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 72,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 41,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 30,
              "name": "doStuff",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 46,
            "end": 70,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 58,
              "name": "doOtherStuff",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 58,
              "end": 61,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 59,
                  "end": 60,
                  "name": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 63,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 64,
                    "end": 65,
                    "typeName": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 82,
            "end": 84,
            "value": "",
            "raw": "''"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 99,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 99,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 93,
                "end": 99
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 102,
            "end": 113,
            "callee": {
              "type": "MemberExpression",
              "start": 102,
              "end": 111,
              "object": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 104,
                "end": 111,
                "name": "doStuff",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 151,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 128,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 128,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 122,
                "end": 128
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 131,
            "end": 151,
            "callee": {
              "type": "MemberExpression",
              "start": 131,
              "end": 145,
              "object": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 145,
                "name": "doOtherStuff",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 146,
                "end": 150,
                "value": "hm",
                "raw": "'hm'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 183,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 166,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 166,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 160,
                "end": 166
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 169,
            "end": 183,
            "callee": {
              "type": "MemberExpression",
              "start": 169,
              "end": 181,
              "object": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 171,
                "end": 180,
                "value": "doStuff",
                "raw": "'doStuff'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 224,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 198,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 198,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 192,
                "end": 198
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 201,
            "end": 224,
            "callee": {
              "type": "MemberExpression",
              "start": 201,
              "end": 218,
              "object": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 203,
                "end": 217,
                "value": "doOtherStuff",
                "raw": "'doOtherStuff'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 219,
                "end": 223,
                "value": "hm",
                "raw": "'hm'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
