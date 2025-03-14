parseClassDeclarationInStrictModeByDefaultInES6.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 174,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 174,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 174,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 46,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 40,
              "decorators": [],
              "name": "interface",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 43,
              "end": 45,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 74,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 68,
              "decorators": [],
              "name": "implements",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 74,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 74,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 109,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 89,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 109,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 109,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 90,
                  "end": 104,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 104,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 101,
                      "end": 104
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 172,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 172,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 172,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 146,
                    "end": 166,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 146,
                      "end": 165,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 155,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 158,
                        "end": 165,
                        "raw": "\"hello\"",
                        "value": "hello"
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
                  "start": 126,
                  "end": 134,
                  "decorators": [],
                  "name": "eval",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 131,
                      "end": 134
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
        "start": 23,
        "end": 24,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
