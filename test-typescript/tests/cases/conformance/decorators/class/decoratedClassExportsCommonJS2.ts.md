__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "name": "forwardRef",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 28,
          "end": 34,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 34,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 31,
              "end": 34
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 68,
            "name": "Something",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 68,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 65,
                "end": 68
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 106,
      "end": 133,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 113,
        "end": 133,
        "id": {
          "type": "Identifier",
          "start": 119,
          "end": 129,
          "name": "Testing123",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 130,
          "end": 133,
          "body": []
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 70,
            "end": 105,
            "expression": {
              "type": "CallExpression",
              "start": 71,
              "end": 105,
              "callee": {
                "type": "Identifier",
                "start": 71,
                "end": 80,
                "name": "Something",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 84,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 86,
                        "end": 102,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 102,
                          "name": "Testing123",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
