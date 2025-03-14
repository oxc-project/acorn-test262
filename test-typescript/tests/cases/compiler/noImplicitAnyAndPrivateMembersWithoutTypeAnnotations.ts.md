test.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 135,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 135,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 59,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 58,
              "decorators": [],
              "name": "someStaticVar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 64,
            "end": 80,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 79,
              "decorators": [],
              "name": "someVar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 106,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 103,
              "decorators": [],
              "name": "getter",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 103,
              "end": 106,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 133,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 129,
              "decorators": [],
              "name": "setter",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 129,
              "end": 133,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "decorators": [],
        "name": "Something",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
app.ts
```json
{
  "type": "Program",
  "start": 35,
  "end": 60,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 43,
            "end": 58,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 56,
              "decorators": [],
              "name": "Something",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
