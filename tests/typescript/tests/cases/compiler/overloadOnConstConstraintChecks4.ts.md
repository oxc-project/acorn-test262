__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 47,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 47,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 45,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 44,
              "end": 45,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 68,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 68,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 111,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 111,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 109,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 109,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 109,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 112,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 124,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 125,
          "end": 135,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 129,
            "end": 135,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 131,
              "end": 135,
              "literal": {
                "type": "Literal",
                "start": 131,
                "end": 135,
                "value": "hi",
                "raw": "'hi'"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 136,
        "end": 139,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 138,
          "end": 139,
          "typeName": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 141,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 153,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 154,
          "end": 165,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 158,
            "end": 165,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 160,
              "end": 165,
              "literal": {
                "type": "Literal",
                "start": 160,
                "end": 165,
                "value": "bye",
                "raw": "'bye'"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 166,
        "end": 169,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 168,
          "end": 169,
          "typeName": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 171,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 183,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 184,
          "end": 196,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 188,
            "end": 196,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 190,
              "end": 196
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 197,
        "end": 200,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 199,
          "end": 200,
          "typeName": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 214,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 215,
          "end": 224,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 224,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 221,
              "end": 224
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 225,
        "end": 228,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 227,
          "end": 228,
          "typeName": {
            "type": "Identifier",
            "start": 227,
            "end": 228,
            "decorators": [],
            "name": "Z",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 229,
        "end": 249,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 235,
            "end": 247,
            "argument": {
              "type": "Literal",
              "start": 242,
              "end": 246,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
