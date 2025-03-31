__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 261,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
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
          "start": 16,
          "end": 37,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 37,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 19,
              "end": 37,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 21,
                  "end": 28,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 24,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 27,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 26,
                      "end": 27,
                      "typeName": {
                        "type": "Identifier",
                        "start": 26,
                        "end": 27,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 29,
                  "end": 35,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 32,
                    "name": "baz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 34,
                      "end": 35,
                      "typeName": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 35,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 56,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 45,
            "end": 54,
            "argument": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 66,
            "end": 90,
            "callee": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 70,
                "end": 89,
                "properties": [
                  {
                    "type": "Property",
                    "start": 72,
                    "end": 78,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 75,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 77,
                      "end": 78,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 80,
                    "end": 87,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 83,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 85,
                      "end": 87,
                      "value": "",
                      "raw": "''"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "start": 101,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 110,
            "end": 133,
            "callee": {
              "type": "Identifier",
              "start": 110,
              "end": 113,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 114,
                "end": 132,
                "properties": [
                  {
                    "type": "Property",
                    "start": 116,
                    "end": 122,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 119,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 121,
                      "end": 122,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 124,
                    "end": 130,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 127,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 129,
                      "end": 130,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "start": 149,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 155,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 158,
            "end": 185,
            "callee": {
              "type": "Identifier",
              "start": 158,
              "end": 161,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 162,
                "end": 184,
                "properties": [
                  {
                    "type": "Property",
                    "start": 164,
                    "end": 172,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 167,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 172,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 174,
                    "end": 182,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 177,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 182,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "start": 205,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 246,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 211,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 214,
            "end": 246,
            "callee": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 226,
                "end": 245,
                "properties": [
                  {
                    "type": "Property",
                    "start": 228,
                    "end": 234,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 231,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 233,
                      "end": 234,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 236,
                    "end": 243,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 239,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 241,
                      "end": 243,
                      "value": "",
                      "raw": "''"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 217,
              "end": 225,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 218,
                  "end": 224,
                  "typeName": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 224,
                    "name": "Object",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
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
