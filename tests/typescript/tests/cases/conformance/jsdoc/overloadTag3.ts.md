__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 232,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 178,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 30,
        "end": 178,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 40,
          "end": 178,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 99,
              "end": 116,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 99,
                "end": 110,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 110,
                "end": 116,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 113,
                  "end": 116,
                  "body": []
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
              "start": 162,
              "end": 176,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 162,
                "end": 165,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 165,
                "end": 176,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 173,
                  "end": 176,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 166,
                    "end": 171,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
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
          "start": 36,
          "end": 39,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 214,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 232,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 216,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 216,
          "end": 219,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 222,
          "end": 231,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 226,
            "end": 229,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
