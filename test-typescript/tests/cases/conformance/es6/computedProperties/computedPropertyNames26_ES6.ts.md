__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 247,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 48,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
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
              "start": 20,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 48,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 33,
                    "end": 42,
                    "argument": {
                      "type": "Literal",
                      "start": 40,
                      "end": 41,
                      "raw": "0",
                      "value": 0
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
      "start": 51,
      "end": 247,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 247,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 200,
            "end": 245,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 210,
              "end": 233,
              "computed": true,
              "object": {
                "type": "ObjectExpression",
                "start": 210,
                "end": 230,
                "properties": [
                  {
                    "type": "Property",
                    "start": 212,
                    "end": 228,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 213,
                      "end": 224,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 213,
                        "end": 222,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 213,
                          "end": 218
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 222,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 227,
                      "end": 228,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 231,
                "end": 232,
                "raw": "0",
                "value": 0
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 239,
              "end": 245,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 245,
                "body": []
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
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
