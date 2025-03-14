inheritanceMemberAccessorOverridingAccessor.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 87,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 87,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 50,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 50,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 50,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 32,
                    "end": 44,
                    "argument": {
                      "type": "Literal",
                      "start": 39,
                      "end": 43,
                      "raw": "\"20\"",
                      "value": "20"
                    }
                  }
                ]
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
            "start": 55,
            "end": 85,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 85,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 85,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 75,
                  "decorators": [],
                  "name": "aValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 69,
                      "end": 75
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
        "name": "a",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 186,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 186,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 149,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 118,
              "end": 149,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 121,
                "end": 149,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 131,
                    "end": 143,
                    "argument": {
                      "type": "Literal",
                      "start": 138,
                      "end": 142,
                      "raw": "\"20\"",
                      "value": "20"
                    }
                  }
                ]
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
            "start": 154,
            "end": 184,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 159,
              "end": 184,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 184,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 160,
                  "end": 174,
                  "decorators": [],
                  "name": "aValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 168,
                      "end": 174
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
        "start": 95,
        "end": 96,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 105,
        "end": 106,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
