__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 58,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 58,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 58,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 56,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 32,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 32,
                "end": 56,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 33,
                    "end": 51,
                    "accessibility": null,
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 51,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 43,
                        "end": 51,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 45,
                          "end": 51
                        }
                      }
                    },
                    "readonly": true,
                    "static": false
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 53,
                  "end": 56,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 114,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 67,
        "end": 114,
        "id": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 80,
          "end": 114,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 86,
              "end": 112,
              "argument": {
                "type": "ClassExpression",
                "start": 93,
                "end": 112,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 109,
                  "end": 112,
                  "body": []
                },
                "abstract": false,
                "declare": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
