derivedClassFunctionOverridesBaseClassAccessor.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 50,
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 50,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 50,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 35,
                    "end": 44,
                    "argument": {
                      "type": "Literal",
                      "start": 42,
                      "end": 43,
                      "raw": "1",
                      "value": 1
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
            "end": 71,
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
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 71,
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
                  "end": 62,
                  "decorators": [],
                  "name": "v",
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 84,
      "end": 148,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 148,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 146,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 118,
              "end": 146,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 121,
                "end": 146,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 131,
                    "end": 140,
                    "argument": {
                      "type": "Literal",
                      "start": 138,
                      "end": 139,
                      "raw": "1",
                      "value": 1
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
        "start": 90,
        "end": 97,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
