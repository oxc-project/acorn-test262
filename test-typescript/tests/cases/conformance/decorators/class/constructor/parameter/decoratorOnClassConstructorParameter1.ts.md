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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "dec",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 37,
          "decorators": [],
          "name": "target",
          "optional": false,
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
                "decorators": [],
                "name": "Function",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 39,
          "end": 67,
          "decorators": [],
          "name": "propertyKey",
          "optional": false,
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
          }
        },
        {
          "type": "Identifier",
          "start": 69,
          "end": 91,
          "decorators": [],
          "name": "parameterIndex",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 91,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 85,
              "end": 91
            }
          }
        }
      ],
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 145,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 126,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 145,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 145,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 132,
                  "end": 141,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 127,
                      "end": 131,
                      "expression": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 131,
                        "decorators": [],
                        "name": "dec",
                        "optional": false
                      }
                    }
                  ],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 141,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 135,
                      "end": 141
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
