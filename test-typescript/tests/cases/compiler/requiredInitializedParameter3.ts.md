requiredInitializedParameter3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 30,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 19,
            "end": 28,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 84,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 84,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 61,
            "end": 82,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 67,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 67,
              "end": 82,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 82,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 68,
                  "end": 73,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 72,
                    "end": 73,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "Identifier",
                  "start": 75,
                  "end": 77,
                  "decorators": [],
                  "name": "b",
                  "optional": true
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
        "start": 38,
        "end": 40,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 52,
          "end": 54,
          "expression": {
            "type": "Identifier",
            "start": 52,
            "end": 54,
            "decorators": [],
            "name": "I1",
            "optional": false
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
