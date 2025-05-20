__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 52,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "decorators": [],
              "name": "stat",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 30,
              "end": 32,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 38,
            "end": 50,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 44,
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 47,
              "end": 49,
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
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
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 81,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 80,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 54,
          "end": 68,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 61,
            "end": 68,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "NewExpression",
          "start": 71,
          "end": 80,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 114,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 83,
        "end": 113,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 83,
          "end": 108,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 83,
            "end": 97,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 89,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 90,
              "end": 97,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 98,
            "end": 108,
            "decorators": [],
            "name": "additional",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 111,
          "end": 113,
          "raw": "20",
          "value": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
