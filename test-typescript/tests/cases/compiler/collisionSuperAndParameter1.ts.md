__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 13,
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
      "start": 15,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 25,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 120,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 118,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 118,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 48,
                "end": 118,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 58,
                    "end": 112,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 62,
                        "end": 112,
                        "id": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 68,
                          "name": "lambda",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 71,
                          "end": 112,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 72,
                              "end": 86,
                              "name": "_super",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 78,
                                "end": 86,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 80,
                                  "end": 86
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 91,
                            "end": 112,
                            "body": []
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
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
