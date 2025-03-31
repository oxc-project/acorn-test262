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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 17,
        "name": "FunctionType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 20,
        "end": 29,
        "typeParameters": null,
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 46,
        "name": "DoesntWork",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 52,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 54,
                    "end": 60
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 62,
                "end": 71,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 63,
                  "end": 71,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 65,
                    "end": 71
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 76,
            "end": 88,
            "typeName": {
              "type": "Identifier",
              "start": 76,
              "end": 88,
              "name": "FunctionType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 117,
            "name": "doesntWork",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 117,
                  "name": "DoesntWork",
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
          "init": {
            "type": "ObjectExpression",
            "start": 120,
            "end": 140,
            "properties": [
              {
                "type": "Property",
                "start": 122,
                "end": 126,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 125,
                  "end": 126,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 128,
                "end": 132,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 131,
                  "end": 132,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 134,
                "end": 138,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 137,
                  "end": 138,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
