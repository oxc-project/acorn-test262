constructorStaticParamNameErrors.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "'use strict'",
        "value": "use strict"
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 130,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 98,
        "end": 130,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 128,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
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
              "start": 116,
              "end": 128,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 125,
                "end": 128,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 117,
                  "end": 123,
                  "decorators": [],
                  "name": "static",
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
        "start": 93,
        "end": 97,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
