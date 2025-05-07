__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 117,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 117,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 62,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 62,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 62,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 46,
                    "end": 56,
                    "argument": {
                      "type": "Literal",
                      "start": 53,
                      "end": 55,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 115,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 68,
              "end": 83,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 68,
                "end": 74,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 75,
                "end": 83,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 115,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 115,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 97,
                    "end": 109,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 104,
                      "end": 108
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 22,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 132,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 132,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 126,
                "end": 132
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 134,
      "end": 169,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 166,
        "end": 169,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "NewExpression",
        "start": 144,
        "end": 164,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 148,
          "end": 164,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
