__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 396,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 18,
        "decorators": [],
        "name": "numbers",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 19,
        "end": 40,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 25,
            "end": 29,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "zero",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 35,
            "end": 38,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 63,
        "decorators": [],
        "name": "indexAccess",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 97,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 80,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 70,
              "end": 71,
              "value": 0,
              "raw": "0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 95,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 85,
              "end": 86,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
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
      "start": 99,
      "end": 121,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 120,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 120,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 120,
                  "decorators": [],
                  "name": "indexAccess",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 139,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 131,
            "end": 138,
            "object": {
              "type": "Identifier",
              "start": 131,
              "end": 135,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 136,
              "end": 137,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 156,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 148,
            "end": 155,
            "object": {
              "type": "Identifier",
              "start": 148,
              "end": 152,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 153,
              "end": 154,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 158,
      "end": 186,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 167,
            "end": 185,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 171,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 172,
              "end": 184,
              "object": {
                "type": "Identifier",
                "start": 172,
                "end": 179,
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 180,
                "end": 184,
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 214,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 213,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 193,
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 196,
            "end": 213,
            "object": {
              "type": "Identifier",
              "start": 196,
              "end": 200,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 201,
              "end": 212,
              "object": {
                "type": "Identifier",
                "start": 201,
                "end": 208,
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 209,
                "end": 212,
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 247,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 246,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 222,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 225,
            "end": 246,
            "object": {
              "type": "Identifier",
              "start": 225,
              "end": 229,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 230,
              "end": 245,
              "object": {
                "type": "Identifier",
                "start": 230,
                "end": 237,
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 238,
                "end": 244,
                "value": "zero",
                "raw": "\"zero\""
              },
              "optional": false,
              "computed": true
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 248,
      "end": 278,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 254,
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 257,
            "end": 277,
            "object": {
              "type": "Identifier",
              "start": 257,
              "end": 261,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 262,
              "end": 276,
              "object": {
                "type": "Identifier",
                "start": 262,
                "end": 269,
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 270,
                "end": 275,
                "value": "one",
                "raw": "\"one\""
              },
              "optional": false,
              "computed": true
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 280,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 300,
        "decorators": [],
        "name": "numbersNotConst",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 301,
        "end": 322,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 307,
            "end": 311,
            "id": {
              "type": "Identifier",
              "start": 307,
              "end": 311,
              "decorators": [],
              "name": "zero",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 317,
            "end": 320,
            "id": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 324,
      "end": 360,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 330,
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 333,
            "end": 359,
            "object": {
              "type": "Identifier",
              "start": 333,
              "end": 337,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 338,
              "end": 358,
              "object": {
                "type": "Identifier",
                "start": 338,
                "end": 353,
                "decorators": [],
                "name": "numbersNotConst",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 354,
                "end": 358,
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 396,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 395,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 367,
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 370,
            "end": 395,
            "object": {
              "type": "Identifier",
              "start": 370,
              "end": 374,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 375,
              "end": 394,
              "object": {
                "type": "Identifier",
                "start": 375,
                "end": 390,
                "decorators": [],
                "name": "numbersNotConst",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 391,
                "end": 394,
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
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
