__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dec",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 37
              },
              "typeArguments": null,
              "start": 29,
              "end": 37
            },
            "start": 27,
            "end": 37
          },
          "start": 21,
          "end": 37
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "propertyKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 52,
              "end": 67
            },
            "start": 50,
            "end": 67
          },
          "start": 39,
          "end": 67
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "parameterIndex",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 85,
              "end": 91
            },
            "start": 83,
            "end": 91
          },
          "start": 69,
          "end": 91
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 94,
          "end": 98
        },
        "start": 92,
        "end": 98
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 126
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 131
                      },
                      "start": 127,
                      "end": 131
                    }
                  ],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 135,
                      "end": 141
                    },
                    "start": 133,
                    "end": 141
                  },
                  "start": 132,
                  "end": 141
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 143,
                "end": 145
              },
              "expression": false,
              "start": 126,
              "end": 145
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 115,
            "end": 145
          }
        ],
        "start": 109,
        "end": 147
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 147
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 147
}
```
