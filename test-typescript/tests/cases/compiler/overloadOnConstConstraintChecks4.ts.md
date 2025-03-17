__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 250,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 47,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 45,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 44,
              "end": 45,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "ClassDeclaration",
      "start": 48,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 68,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 111,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 109,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 109,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 109,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "type": "TSDeclareFunction",
      "start": 112,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 124,
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
          "start": 125,
          "end": 135,
          "name": "name",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
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
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 141,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 153,
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
          "start": 154,
          "end": 165,
          "name": "name",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 171,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 183,
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
          "start": 184,
          "end": 196,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 188,
            "end": 196,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 190,
              "end": 196
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
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
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 214,
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
          "start": 215,
          "end": 224,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 224,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 221,
              "end": 224
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
      "declare": false,
      "typeParameters": null,
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
            "name": "Z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
