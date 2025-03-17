__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "dec",
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
          "start": 21,
          "end": 37,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 37,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 37,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 37,
                "name": "Function",
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
        {
          "type": "Identifier",
          "start": 39,
          "end": 67,
          "name": "propertyKey",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 67,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 52,
              "end": 67,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 52,
                  "end": 58
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 61,
                  "end": 67
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 69,
          "end": 91,
          "name": "parameterIndex",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 91,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 85,
              "end": 91
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 92,
        "end": 98,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 94,
          "end": 98
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 145,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 126,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 145,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 132,
                  "end": 141,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 141,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 135,
                      "end": 141
                    }
                  },
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 127,
                      "end": 131,
                      "expression": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 131,
                        "name": "dec",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 145,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
  "sourceType": "script",
  "hashbang": null
}
```
