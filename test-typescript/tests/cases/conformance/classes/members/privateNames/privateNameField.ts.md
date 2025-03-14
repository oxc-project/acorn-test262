__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 95,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 95,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 19,
              "name": "name"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 93,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 44,
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
              "start": 44,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 93,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 69,
                    "end": 87,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 69,
                      "end": 86,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 69,
                        "end": 79,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 69,
                          "end": 73
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 74,
                          "end": 79,
                          "name": "name"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 86,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 45,
                  "end": 57,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 51,
                      "end": 57
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
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
