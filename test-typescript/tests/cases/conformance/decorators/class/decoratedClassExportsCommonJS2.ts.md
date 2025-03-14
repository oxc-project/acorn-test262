a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "decorators": [],
        "name": "forwardRef",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 28,
          "end": 34,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 34,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 31,
              "end": 34
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 35,
        "end": 40,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 37,
          "end": 40
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 68,
            "decorators": [],
            "name": "Something",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 68,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 65,
                "end": 68
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 106,
      "end": 133,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 113,
        "end": 133,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 130,
          "end": 133,
          "body": []
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 70,
            "end": 105,
            "expression": {
              "type": "CallExpression",
              "start": 71,
              "end": 105,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 81,
                  "end": 104,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 83,
                      "end": 102,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 84,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 86,
                        "end": 102,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 102,
                          "decorators": [],
                          "name": "Testing123",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 71,
                "end": 80,
                "decorators": [],
                "name": "Something",
                "optional": false
              },
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 119,
          "end": 129,
          "decorators": [],
          "name": "Testing123",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
