__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
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
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 23,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 22,
              "end": 23,
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
      "start": 26,
      "end": 46,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 46,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 47,
      "end": 89,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 89,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 71,
            "end": 87,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 87,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 87,
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
      "start": 90,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 102,
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
          "start": 103,
          "end": 113,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 107,
            "end": 113,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 109,
              "end": 113,
              "literal": {
                "type": "Literal",
                "start": 109,
                "end": 113,
                "value": "hi",
                "raw": "'hi'"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 114,
        "end": 117,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 116,
          "end": 117,
          "typeName": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
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
      "start": 119,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 131,
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
          "start": 132,
          "end": 143,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 136,
            "end": 143,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 138,
              "end": 143,
              "literal": {
                "type": "Literal",
                "start": 138,
                "end": 143,
                "value": "bye",
                "raw": "'bye'"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 144,
        "end": 147,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 146,
          "end": 147,
          "typeName": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
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
      "start": 149,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 161,
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
          "start": 162,
          "end": 174,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 174,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 168,
              "end": 174
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 178,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 177,
          "end": 178,
          "typeName": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
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
      "start": 180,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 192,
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
          "start": 193,
          "end": 202,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 197,
            "end": 202,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 199,
              "end": 202
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 203,
        "end": 206,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 205,
          "end": 206,
          "typeName": {
            "type": "Identifier",
            "start": 205,
            "end": 206,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 207,
        "end": 227,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 213,
            "end": 225,
            "argument": {
              "type": "Literal",
              "start": 220,
              "end": 224,
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
