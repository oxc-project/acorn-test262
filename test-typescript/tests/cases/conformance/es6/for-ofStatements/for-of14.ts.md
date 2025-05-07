__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 64,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 64,
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
      "start": 66,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 79,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
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
      "start": 81,
      "end": 116,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 113,
        "end": 116,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "NewExpression",
        "start": 91,
        "end": 111,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 95,
          "end": 111,
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
