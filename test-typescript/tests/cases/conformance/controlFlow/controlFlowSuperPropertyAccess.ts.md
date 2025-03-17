__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 35,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 26,
              "end": 35,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 30,
                  "end": 34
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": true,
            "accessibility": "protected"
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
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 62,
            "end": 106,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 66,
              "name": "body",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 66,
              "end": 106,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 69,
                "end": 106,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 79,
                    "end": 100,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 79,
                      "end": 99,
                      "left": {
                        "type": "MemberExpression",
                        "start": 79,
                        "end": 86,
                        "object": {
                          "type": "Super",
                          "start": 79,
                          "end": 84
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 86,
                          "name": "m",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 90,
                        "end": 99,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 90,
                          "end": 97,
                          "object": {
                            "type": "Super",
                            "start": 90,
                            "end": 95
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 97,
                            "name": "m",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "directive": null
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
