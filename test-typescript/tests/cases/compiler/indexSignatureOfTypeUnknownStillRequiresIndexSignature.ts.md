__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 69,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 69,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 51,
              "end": 69,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 53,
                  "end": 67,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 54,
                      "end": 63,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 55,
                        "end": 63,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 57,
                          "end": 63
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 66,
                      "end": 67,
                      "typeName": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 46,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnknownKeyword",
              "start": 29,
              "end": 36
            },
            "default": {
              "type": "TSUnknownKeyword",
              "start": 39,
              "end": 46
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 70,
        "end": 73,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 72,
          "end": 73,
          "typeName": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 87,
            "name": "stooges",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 90,
            "end": 180,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 94,
                "end": 118,
                "properties": [
                  {
                    "type": "Property",
                    "start": 96,
                    "end": 107,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 100,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 102,
                      "end": 107,
                      "value": "moe",
                      "raw": "\"moe\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 109,
                    "end": 116,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 112,
                      "name": "age",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 114,
                      "end": 116,
                      "value": 40,
                      "raw": "40"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 122,
                "end": 148,
                "properties": [
                  {
                    "type": "Property",
                    "start": 124,
                    "end": 137,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 128,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 130,
                      "end": 137,
                      "value": "larry",
                      "raw": "\"larry\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 139,
                    "end": 146,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 142,
                      "name": "age",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 144,
                      "end": 146,
                      "value": 50,
                      "raw": "50"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 152,
                "end": 178,
                "properties": [
                  {
                    "type": "Property",
                    "start": 154,
                    "end": 167,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 158,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 160,
                      "end": 167,
                      "value": "curly",
                      "raw": "\"curly\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 169,
                    "end": 176,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 172,
                      "name": "age",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 174,
                      "end": 176,
                      "value": 60,
                      "raw": "60"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 194,
      "expression": {
        "type": "CallExpression",
        "start": 183,
        "end": 193,
        "callee": {
          "type": "Identifier",
          "start": 183,
          "end": 184,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 185,
            "end": 192,
            "name": "stooges",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
