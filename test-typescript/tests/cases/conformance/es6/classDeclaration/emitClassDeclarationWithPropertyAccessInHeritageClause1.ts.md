emitClassDeclarationWithPropertyAccessInHeritageClause1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 48,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 26,
        "end": 48,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 32,
            "end": 46,
            "argument": {
              "type": "ObjectExpression",
              "start": 39,
              "end": 45,
              "properties": [
                {
                  "type": "Property",
                  "start": 40,
                  "end": 44,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 23,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 77,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 77,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 65,
        "end": 74,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 66,
          "end": 71,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 73,
          "end": 74,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
