__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 233,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 75,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 70,
            "decorators": [],
            "name": "Workspace",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 73,
            "end": 75,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 115,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 136,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 136,
        "callee": {
          "type": "MemberExpression",
          "start": 116,
          "end": 134,
          "object": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 118,
            "end": 134,
            "decorators": [],
            "name": "isServiceProject",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 175,
      "expression": {
        "type": "AssignmentExpression",
        "start": 138,
        "end": 175,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 138,
          "end": 155,
          "object": {
            "type": "Identifier",
            "start": 138,
            "end": 147,
            "decorators": [],
            "name": "Workspace",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 148,
            "end": 155,
            "decorators": [],
            "name": "Project",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 158,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 169,
            "decorators": [],
            "name": "wp",
            "optional": false,
            "typeAnnotation": null
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 172,
            "end": 175,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 233,
      "expression": {
        "type": "AssignmentExpression",
        "start": 176,
        "end": 233,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 176,
          "end": 203,
          "object": {
            "type": "MemberExpression",
            "start": 176,
            "end": 193,
            "object": {
              "type": "Identifier",
              "start": 176,
              "end": 185,
              "decorators": [],
              "name": "Workspace",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 186,
              "end": 193,
              "decorators": [],
              "name": "Project",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 194,
            "end": 203,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 206,
          "end": 233,
          "properties": [
            {
              "type": "Property",
              "start": 210,
              "end": 231,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 210,
                "end": 226,
                "decorators": [],
                "name": "isServiceProject",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 226,
                "end": 231,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 229,
                  "end": 231,
                  "body": []
                },
                "expression": false
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
