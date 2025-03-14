__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 14,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 23,
            "end": 118,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 44,
              "end": 118,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 50,
                  "end": 63,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 54,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 56,
                      "end": 62
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 68,
                  "end": 91,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 75,
                    "decorators": [],
                    "name": "onStart",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 75,
                    "end": 91,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 84,
                      "end": 91,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 79,
                        "end": 83
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 96,
                  "end": 116,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 100,
                    "decorators": [],
                    "name": "func",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 103,
                    "end": 116,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 109,
                      "end": 116,
                      "body": []
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 42,
                "end": 43,
                "expression": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            ],
            "superClass": null
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
