__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 82,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 81,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 26,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 17,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 26,
                  "value": "hello",
                  "raw": "'hello'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 28,
                "end": 40,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 31,
                  "decorators": [],
                  "name": "bat",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 33,
                  "end": 40,
                  "value": "world",
                  "raw": "'world'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 42,
                "end": 79,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 45,
                  "decorators": [],
                  "name": "bam",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 47,
                  "end": 79,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 49,
                      "end": 77,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 53,
                        "decorators": [],
                        "name": "bork",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 55,
                        "end": 77,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 57,
                            "end": 65,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 57,
                              "end": 60,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 62,
                              "end": 65,
                              "value": "a",
                              "raw": "'a'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 67,
                            "end": 75,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 67,
                              "end": 70,
                              "decorators": [],
                              "name": "baz",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 72,
                              "end": 75,
                              "value": "b",
                              "raw": "'b'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
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
      "start": 83,
      "end": 210,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 209,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 150,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 94,
                "end": 150,
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "start": 95,
                    "end": 96,
                    "literal": {
                      "type": "Literal",
                      "start": 95,
                      "end": 96,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 98,
                    "end": 99,
                    "literal": {
                      "type": "Literal",
                      "start": 98,
                      "end": 99,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 101,
                    "end": 102,
                    "literal": {
                      "type": "Literal",
                      "start": 101,
                      "end": 102,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  {
                    "type": "TSTupleType",
                    "start": 104,
                    "end": 149,
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "start": 105,
                        "end": 108,
                        "literal": {
                          "type": "Literal",
                          "start": 105,
                          "end": 108,
                          "value": "a",
                          "raw": "'a'"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 110,
                        "end": 113,
                        "literal": {
                          "type": "Literal",
                          "start": 110,
                          "end": 113,
                          "value": "b",
                          "raw": "'b'"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 115,
                        "end": 118,
                        "literal": {
                          "type": "Literal",
                          "start": 115,
                          "end": 118,
                          "value": "c",
                          "raw": "'c'"
                        }
                      },
                      {
                        "type": "TSTupleType",
                        "start": 120,
                        "end": 148,
                        "elementTypes": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 121,
                            "end": 133,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 122,
                                "end": 132,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 122,
                                  "end": 125,
                                  "decorators": [],
                                  "name": "def",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 125,
                                  "end": 132,
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "start": 127,
                                    "end": 132,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 127,
                                      "end": 132,
                                      "value": "def",
                                      "raw": "'def'"
                                    }
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 135,
                            "end": 147,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 136,
                                "end": 146,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 136,
                                  "end": 139,
                                  "decorators": [],
                                  "name": "sec",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 139,
                                  "end": 146,
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "start": 141,
                                    "end": 146,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 141,
                                      "end": 146,
                                      "value": "sec",
                                      "raw": "'sec'"
                                    }
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 153,
            "end": 209,
            "elements": [
              {
                "type": "Literal",
                "start": 154,
                "end": 155,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 157,
                "end": 158,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 160,
                "end": 161,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 163,
                "end": 208,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 164,
                    "end": 167,
                    "value": "a",
                    "raw": "'a'"
                  },
                  {
                    "type": "Literal",
                    "start": 169,
                    "end": 172,
                    "value": "b",
                    "raw": "'b'"
                  },
                  {
                    "type": "Literal",
                    "start": 174,
                    "end": 177,
                    "value": "c",
                    "raw": "'c'"
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 179,
                    "end": 207,
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "start": 180,
                        "end": 192,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 181,
                            "end": 191,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 181,
                              "end": 184,
                              "decorators": [],
                              "name": "def",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 186,
                              "end": 191,
                              "value": "def",
                              "raw": "'def'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      {
                        "type": "ObjectExpression",
                        "start": 194,
                        "end": 206,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 195,
                            "end": 205,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 195,
                              "end": 198,
                              "decorators": [],
                              "name": "sec",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 200,
                              "end": 205,
                              "value": "sec",
                              "raw": "'sec'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 211,
      "end": 231,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 220,
          "end": 223,
          "local": {
            "type": "Identifier",
            "start": 220,
            "end": 223,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 220,
            "end": 223,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 225,
          "end": 228,
          "local": {
            "type": "Identifier",
            "start": 225,
            "end": 228,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 225,
            "end": 228,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 317,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 32,
        "value": "./foo",
        "raw": "'./foo'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 54,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 43,
          "end": 46,
          "local": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 48,
          "end": 51,
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 51,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 48,
            "end": 51,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 127,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 126,
          "id": {
            "type": "ObjectPattern",
            "start": 62,
            "end": 120,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 64,
                "end": 72,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 67,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 72,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 74,
                "end": 77,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 77,
                  "decorators": [],
                  "name": "bat",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 77,
                  "decorators": [],
                  "name": "bat",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 79,
                "end": 118,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 82,
                  "decorators": [],
                  "name": "bam",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 84,
                  "end": 118,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 86,
                      "end": 116,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 90,
                        "decorators": [],
                        "name": "bork",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "start": 92,
                        "end": 116,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 94,
                            "end": 103,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 94,
                              "end": 97,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 99,
                              "end": 103,
                              "decorators": [],
                              "name": "ibar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 105,
                            "end": 114,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 105,
                              "end": 108,
                              "decorators": [],
                              "name": "baz",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 110,
                              "end": 114,
                              "decorators": [],
                              "name": "ibaz",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 123,
            "end": 126,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 128,
      "end": 149,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 137,
          "end": 140,
          "local": {
            "type": "Identifier",
            "start": 137,
            "end": 140,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 137,
            "end": 140,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 142,
          "end": 146,
          "local": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "decorators": [],
            "name": "ibaz",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "decorators": [],
            "name": "ibaz",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 197,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 196,
          "id": {
            "type": "ArrayPattern",
            "start": 157,
            "end": 190,
            "decorators": [],
            "elements": [
              null,
              {
                "type": "Identifier",
                "start": 161,
                "end": 164,
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null
              },
              null,
              {
                "type": "ArrayPattern",
                "start": 168,
                "end": 189,
                "decorators": [],
                "elements": [
                  null,
                  {
                    "type": "Identifier",
                    "start": 171,
                    "end": 174,
                    "decorators": [],
                    "name": "bee",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  null,
                  {
                    "type": "ArrayPattern",
                    "start": 178,
                    "end": 188,
                    "decorators": [],
                    "elements": [
                      null,
                      {
                        "type": "ObjectPattern",
                        "start": 181,
                        "end": 186,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 182,
                            "end": 185,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 182,
                              "end": 185,
                              "decorators": [],
                              "name": "sec",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 182,
                              "end": 185,
                              "decorators": [],
                              "name": "sec",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 193,
            "end": 196,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 198,
      "end": 223,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 207,
          "end": 210,
          "local": {
            "type": "Identifier",
            "start": 207,
            "end": 210,
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 207,
            "end": 210,
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 212,
          "end": 215,
          "local": {
            "type": "Identifier",
            "start": 212,
            "end": 215,
            "decorators": [],
            "name": "bee",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 212,
            "end": 215,
            "decorators": [],
            "name": "bee",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 217,
          "end": 220,
          "local": {
            "type": "Identifier",
            "start": 217,
            "end": 220,
            "decorators": [],
            "name": "sec",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 217,
            "end": 220,
            "decorators": [],
            "name": "sec",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 267,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 266,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 237,
            "decorators": [],
            "name": "getFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 240,
            "end": 266,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 247,
              "end": 265,
              "properties": [
                {
                  "type": "Property",
                  "start": 253,
                  "end": 263,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 256,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 258,
                    "end": 263,
                    "value": "foo",
                    "raw": "'foo'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 269,
      "end": 300,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 299,
          "id": {
            "type": "ObjectPattern",
            "start": 275,
            "end": 288,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 277,
                "end": 286,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 280,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 286,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 291,
            "end": 299,
            "callee": {
              "type": "Identifier",
              "start": 291,
              "end": 297,
              "decorators": [],
              "name": "getFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 301,
      "end": 317,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 310,
          "end": 314,
          "local": {
            "type": "Identifier",
            "start": 310,
            "end": 314,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 310,
            "end": 314,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
