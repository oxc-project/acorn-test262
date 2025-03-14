typeOfThisInConstructorParamList.ts
```json
{
  "type": "Program",
  "start": 78,
  "end": 153,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 152,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 152,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 125,
            "end": 150,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 136,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 150,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 147,
                "end": 150,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 137,
                  "end": 145,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "start": 141,
                    "end": 145
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
        "start": 84,
        "end": 92,
        "decorators": [],
        "name": "ErrClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
