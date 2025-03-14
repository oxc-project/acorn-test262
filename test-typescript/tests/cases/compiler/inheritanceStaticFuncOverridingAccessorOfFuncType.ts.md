inheritanceStaticFuncOverridingAccessorOfFuncType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 71,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
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
              "start": 26,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 53,
                    "end": 65,
                    "argument": {
                      "type": "Literal",
                      "start": 60,
                      "end": 64,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 30,
                  "end": 42,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 36,
                      "end": 42
                    }
                  }
                }
              }
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
      "start": 75,
      "end": 140,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 138,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
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
              "start": 107,
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 110,
                "end": 138,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 120,
                    "end": 132,
                    "argument": {
                      "type": "Literal",
                      "start": 127,
                      "end": 131,
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
        "start": 81,
        "end": 82,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
