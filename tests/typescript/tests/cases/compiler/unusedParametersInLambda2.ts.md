__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 87,
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
        "end": 87,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 85,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 85,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 85,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 36,
                    "end": 79,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 43,
                      "end": 79,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 44,
                          "end": 45,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 47,
                          "end": 48,
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 53,
                        "end": 79,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 67,
                            "end": 69,
                            "expression": {
                              "type": "Identifier",
                              "start": 67,
                              "end": 68,
                              "decorators": [],
                              "name": "Y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    }
                  }
                ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
