inheritanceStaticAccessorOverridingMethod.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 55,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 55,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 53,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 53,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 35,
                    "end": 47,
                    "argument": {
                      "type": "Literal",
                      "start": 42,
                      "end": 46,
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
      "start": 57,
      "end": 168,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 168,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 124,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 124,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 124,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 106,
                    "end": 118,
                    "argument": {
                      "type": "Literal",
                      "start": 113,
                      "end": 117,
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
            "start": 129,
            "end": 166,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 141,
              "end": 166,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 158,
                "end": 166,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 142,
                  "end": 156,
                  "decorators": [],
                  "name": "aValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 156,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 150,
                      "end": 156
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
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
