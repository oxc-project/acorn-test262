__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 97,
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
          "end": 35,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 35,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 35,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 35,
                "name": "Object",
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
          "start": 37,
          "end": 65,
          "name": "propertyKey",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 65,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 50,
              "end": 65,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 50,
                  "end": 56
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 59,
                  "end": 65
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 89,
          "name": "parameterIndex",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 81,
            "end": 89,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 83,
              "end": 89
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
        "start": 90,
        "end": 96,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 92,
          "end": 96
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 99,
      "end": 153,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 114,
        "end": 153,
        "id": null,
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 120,
          "end": 153,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 126,
              "end": 151,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 126,
                "end": 132,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 132,
                "end": 151,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 138,
                    "end": 147,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 141,
                        "end": 147
                      }
                    },
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 133,
                        "end": 137,
                        "expression": {
                          "type": "Identifier",
                          "start": 134,
                          "end": 137,
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
                  "start": 149,
                  "end": 151,
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
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
