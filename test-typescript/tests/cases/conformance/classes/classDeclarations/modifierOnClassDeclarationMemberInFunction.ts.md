modifierOnClassDeclarationMemberInFunction.ts
```json
{
  "type": "Program",
  "start": 24,
  "end": 134,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 24,
      "end": 134,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 134,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 43,
            "end": 132,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 51,
              "end": 132,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 61,
                  "end": 76,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 71,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Literal",
                    "start": 74,
                    "end": 75,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 85,
                  "end": 101,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 95,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 95,
                    "end": 101,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 98,
                      "end": 101,
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
                  "start": 110,
                  "end": 126,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 120,
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
                    "start": 120,
                    "end": 126,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 123,
                      "end": 126,
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
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
