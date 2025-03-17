__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 266,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 47,
            "name": "ab",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 47,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 18,
                "end": 47,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 18,
                    "end": 31,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 20,
                        "end": 29,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 20,
                          "end": 21,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 21,
                          "end": 29,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 23,
                            "end": 29
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 34,
                    "end": 47,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 36,
                        "end": 45,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 37,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 37,
                          "end": 45,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 39,
                            "end": 45
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 60,
            "name": "nameN",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 63,
            "end": 66,
            "value": "n",
            "raw": "\"n\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 93,
          "id": {
            "type": "ObjectPattern",
            "start": 74,
            "end": 88,
            "properties": [
              {
                "type": "Property",
                "start": 76,
                "end": 86,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 82,
                  "name": "nameN",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 91,
            "end": 93,
            "name": "ab",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 126,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 138,
            "name": "nameP",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 141,
            "end": 144,
            "value": "p",
            "raw": "\"p\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 173,
          "id": {
            "type": "ObjectPattern",
            "start": 152,
            "end": 163,
            "properties": [
              {
                "type": "Property",
                "start": 154,
                "end": 161,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 154,
                  "end": 157,
                  "value": "p",
                  "raw": "\"p\""
                },
                "value": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 161,
                  "name": "p0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 166,
            "end": 173,
            "callee": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 204,
          "id": {
            "type": "ObjectPattern",
            "start": 181,
            "end": 194,
            "properties": [
              {
                "type": "Property",
                "start": 183,
                "end": 192,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 184,
                  "end": 187,
                  "value": "p",
                  "raw": "\"p\""
                },
                "value": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 192,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 197,
            "end": 204,
            "callee": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 237,
          "id": {
            "type": "ObjectPattern",
            "start": 212,
            "end": 227,
            "properties": [
              {
                "type": "Property",
                "start": 214,
                "end": 225,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 220,
                  "name": "nameP",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 225,
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 230,
            "end": 237,
            "callee": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 264,
          "id": {
            "type": "ObjectPattern",
            "start": 245,
            "end": 254,
            "properties": [
              {
                "type": "Property",
                "start": 247,
                "end": 252,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 252,
                  "name": "p3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 257,
            "end": 264,
            "callee": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
