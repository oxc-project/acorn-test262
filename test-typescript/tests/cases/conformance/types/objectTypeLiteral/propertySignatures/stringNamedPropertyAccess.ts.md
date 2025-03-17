__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 56,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 14,
              "end": 19,
              "value": "a b",
              "raw": "\"a b\""
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
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 54,
            "static": true,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 40,
              "end": 45,
              "value": "c d",
              "raw": "\"c d\""
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
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            },
            "accessibility": null
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
      "start": 57,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 65,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "name": "c",
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 73,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 76,
            "end": 84,
            "object": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 78,
              "end": 83,
              "value": "a b",
              "raw": "\"a b\""
            },
            "computed": true,
            "optional": false
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
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 93,
            "name": "r1b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 96,
            "end": 104,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 98,
              "end": 103,
              "value": "c d",
              "raw": "'c d'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 107,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 125,
              "end": 130,
              "value": "a b",
              "raw": "\"a b\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 132,
                "end": 138
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 150,
            "name": "i",
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 158,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 161,
            "end": 169,
            "object": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 163,
              "end": 168,
              "value": "a b",
              "raw": "\"a b\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 201,
            "name": "a",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 185,
                      "end": 190,
                      "value": "a b",
                      "raw": "\"a b\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 190,
                      "end": 198,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 192,
                        "end": 198
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 208,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 211,
            "end": 219,
            "object": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 213,
              "end": 218,
              "value": "a b",
              "raw": "\"a b\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 236,
                  "end": 241,
                  "value": "a b",
                  "raw": "\"a b\""
                },
                "value": {
                  "type": "Literal",
                  "start": 243,
                  "end": 244,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
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
      "type": "VariableDeclaration",
      "start": 247,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 253,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 256,
            "end": 264,
            "object": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 258,
              "end": 263,
              "value": "a b",
              "raw": "\"a b\""
            },
            "computed": true,
            "optional": false
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
