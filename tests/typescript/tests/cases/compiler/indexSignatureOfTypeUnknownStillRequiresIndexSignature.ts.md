__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 18
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
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
            "const": false,
            "start": 19,
            "end": 46
          }
        ],
        "start": 18,
        "end": 47
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 57,
                          "end": 63
                        },
                        "start": 55,
                        "end": 63
                      },
                      "start": 54,
                      "end": 63
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 67
                      },
                      "typeArguments": null,
                      "start": 66,
                      "end": 67
                    },
                    "start": 64,
                    "end": 67
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 53,
                  "end": 67
                }
              ],
              "start": 51,
              "end": 69
            },
            "start": 49,
            "end": 69
          },
          "start": 48,
          "end": 69
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "typeArguments": null,
          "start": 72,
          "end": 73
        },
        "start": 70,
        "end": 73
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 74
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
            "name": "stooges",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 87
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 100
                    },
                    "value": {
                      "type": "Literal",
                      "value": "moe",
                      "raw": "\"moe\"",
                      "start": 102,
                      "end": 107
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 96,
                    "end": 107
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "age",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 112
                    },
                    "value": {
                      "type": "Literal",
                      "value": 40,
                      "raw": "40",
                      "start": 114,
                      "end": 116
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 109,
                    "end": 116
                  }
                ],
                "start": 94,
                "end": 118
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 128
                    },
                    "value": {
                      "type": "Literal",
                      "value": "larry",
                      "raw": "\"larry\"",
                      "start": 130,
                      "end": 137
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 124,
                    "end": 137
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "age",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 142
                    },
                    "value": {
                      "type": "Literal",
                      "value": 50,
                      "raw": "50",
                      "start": 144,
                      "end": 146
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 139,
                    "end": 146
                  }
                ],
                "start": 122,
                "end": 148
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 158
                    },
                    "value": {
                      "type": "Literal",
                      "value": "curly",
                      "raw": "\"curly\"",
                      "start": 160,
                      "end": 167
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 154,
                    "end": 167
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "age",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 172
                    },
                    "value": {
                      "type": "Literal",
                      "value": 60,
                      "raw": "60",
                      "start": 174,
                      "end": 176
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 169,
                    "end": 176
                  }
                ],
                "start": 152,
                "end": 178
              }
            ],
            "start": 90,
            "end": 180
          },
          "definite": false,
          "start": 80,
          "end": 180
        }
      ],
      "declare": false,
      "start": 76,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 184
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stooges",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 192
          }
        ],
        "optional": false,
        "start": 183,
        "end": 193
      },
      "directive": null,
      "start": 183,
      "end": 194
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 210
}
```
