__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 30,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 17,
        "decorators": [],
        "name": "FunctionType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 20,
        "end": 29,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 23,
          "end": 29,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 26,
            "end": 29
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 89,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 46,
        "decorators": [],
        "name": "DoesntWork",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 49,
        "end": 88,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 49,
            "end": 73,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 51,
                "end": 61,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 52,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 54,
                    "end": 60
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 62,
                "end": 71,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 63,
                  "end": 71,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 65,
                    "end": 71
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 76,
            "end": 88,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 76,
              "end": 88,
              "decorators": [],
              "name": "FunctionType",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 117,
            "decorators": [],
            "name": "doesntWork",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 117,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 117,
                  "decorators": [],
                  "name": "DoesntWork",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 120,
            "end": 140,
            "properties": [
              {
                "type": "Property",
                "start": 122,
                "end": 126,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 125,
                  "end": 126,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 128,
                "end": 132,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 131,
                  "end": 132,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 134,
                "end": 138,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 137,
                  "end": 138,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
