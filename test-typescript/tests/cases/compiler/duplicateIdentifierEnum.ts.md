__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 392,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 102,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 115,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 109,
        "end": 120,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 115,
            "end": 118,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 121,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 149,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 135,
            "end": 147,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 138,
              "name": "foo",
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
              "start": 138,
              "end": 146,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 140,
                "end": 146
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
      "type": "TSInterfaceDeclaration",
      "start": 151,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 162,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 163,
        "end": 183,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 169,
            "end": 181,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 172,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 180,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 174,
                "end": 180
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
      "type": "TSEnumDeclaration",
      "start": 184,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 196,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 203,
          "end": 206,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 206,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 197,
        "end": 208,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 203,
            "end": 206,
            "id": {
              "type": "Identifier",
              "start": 203,
              "end": 206,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 210,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 222,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 223,
        "end": 227,
        "members": []
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 228,
      "end": 258,
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 238,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 241,
        "end": 258,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 247,
            "end": 256,
            "argument": {
              "type": "Literal",
              "start": 254,
              "end": 255,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 260,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 266,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 273,
          "end": 276,
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 276,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 267,
        "end": 278,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 273,
            "end": 276,
            "id": {
              "type": "Identifier",
              "start": 273,
              "end": 276,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 279,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 286,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 287,
        "end": 307,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 293,
            "end": 305,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 293,
              "end": 296,
              "name": "foo",
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
              "start": 296,
              "end": 304,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 298,
                "end": 304
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
  "end": 49,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 30,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 19,
            "end": 28,
            "argument": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 31,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 44,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 38,
        "end": 49,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 44,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
