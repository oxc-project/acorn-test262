stringNamedPropertyAccess.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 265,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 56,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 14,
              "end": 19,
              "raw": "\"a b\"",
              "value": "a b"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 54,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 40,
              "end": 45,
              "raw": "\"c d\"",
              "value": "c d"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 65,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 73,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 76,
            "end": 84,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 78,
              "end": 83,
              "raw": "\"a b\"",
              "value": "a b"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 93,
            "decorators": [],
            "name": "r1b",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 96,
            "end": 104,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 98,
              "end": 103,
              "raw": "'c d'",
              "value": "c d"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 107,
      "end": 141,
      "body": {
        "type": "TSInterfaceBody",
        "start": 119,
        "end": 141,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 125,
            "end": 139,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 125,
              "end": 130,
              "raw": "\"a b\"",
              "value": "a b"
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 132,
                "end": 138
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 150,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 149,
                "end": 150,
                "typeName": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 158,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 161,
            "end": 169,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 163,
              "end": 168,
              "raw": "\"a b\"",
              "value": "a b"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 201,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 179,
                "end": 201,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 185,
                    "end": 199,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 185,
                      "end": 190,
                      "raw": "\"a b\"",
                      "value": "a b"
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 190,
                      "end": 198,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 192,
                        "end": 198
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 220,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 219,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 208,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 211,
            "end": 219,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 213,
              "end": 218,
              "raw": "\"a b\"",
              "value": "a b"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 246,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 230,
            "end": 246,
            "properties": [
              {
                "type": "Property",
                "start": 236,
                "end": 244,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 236,
                  "end": 241,
                  "raw": "\"a b\"",
                  "value": "a b"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 243,
                  "end": 244,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 264,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 253,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 256,
            "end": 264,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 258,
              "end": 263,
              "raw": "\"a b\"",
              "value": "a b"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
