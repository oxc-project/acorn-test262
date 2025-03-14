noImplicitAnyMissingSetAccessor.ts
```json
{
  "type": "Program",
  "start": 26,
  "end": 170,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 86,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 86,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 54,
            "end": 84,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 81,
              "decorators": [],
              "name": "message",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 81,
              "end": 84,
              "async": false,
              "body": null,
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
        "start": 41,
        "end": 47,
        "decorators": [],
        "name": "Parent",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 170,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 170,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 168,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 139,
              "decorators": [],
              "name": "message",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 139,
              "end": 168,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 142,
                "end": 168,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 152,
                    "end": 162,
                    "argument": {
                      "type": "Literal",
                      "start": 159,
                      "end": 161,
                      "raw": "\"\"",
                      "value": ""
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
        "start": 94,
        "end": 99,
        "decorators": [],
        "name": "Child",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 108,
        "end": 114,
        "decorators": [],
        "name": "Parent",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
