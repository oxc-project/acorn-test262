__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 194,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 27,
      "end": 90,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 90,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 55,
            "end": 88,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 82,
              "decorators": [],
              "name": "message",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 82,
              "end": 88,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 86,
                  "decorators": [],
                  "name": "str",
                  "optional": false
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
        "start": 42,
        "end": 48,
        "decorators": [],
        "name": "Parent",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 194,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 119,
        "end": 194,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 133,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 127,
              "decorators": [],
              "name": "_x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 132,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 129,
                "end": 132
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 138,
            "end": 192,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 156,
              "decorators": [],
              "name": "message",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 192,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 162,
                "end": 192,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 172,
                    "end": 186,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 172,
                      "end": 185,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 172,
                        "end": 179,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 172,
                          "end": 176
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 179,
                          "decorators": [],
                          "name": "_x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 185,
                        "decorators": [],
                        "name": "str",
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
                  "start": 157,
                  "end": 160,
                  "decorators": [],
                  "name": "str",
                  "optional": false
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
        "start": 98,
        "end": 103,
        "decorators": [],
        "name": "Child",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 118,
        "decorators": [],
        "name": "Parent",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
